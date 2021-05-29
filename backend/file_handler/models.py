from django.db import models
from django.contrib.auth.models import User


# Create your models here.
def user_directory_path(instance, filename):
    # file will be uploaded to MEDIA_ROOT/user_<id>/<filename>
    return 'user_{0}/{1}'.format(instance.owner.id, filename)


class File(models.Model):
    # owner of the file + people who can edit it
    owner = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='owner')
    editors = models.ForeignKey(
        User, to_field='id', on_delete=models.PROTECT, related_name='editors', blank=True, null=True)
    # people who can see the file
    watchers = models.ForeignKey(
        User, to_field='id', on_delete=models.PROTECT, related_name='watchers', blank=True, null=True)

    # if its globally accessible or not
    isGlobal = models.BooleanField(default=False)
    # name of the file
    fileName = models.CharField(max_length=200)

    # actual file
    datafile = models.FileField(upload_to=user_directory_path, blank=False, null=False)
    # time stamp
    uploadedOn = models.DateTimeField(auto_now_add=True)
    
    def __str__(self) -> str:
        return self.fileName

    @property
    def url(self):
        print(self.datafile.url)
        return self.datafile.url


# FILE HANDLERS : reference - https://cmljnelson.blog/2020/06/22/delete-files-when-deleting-models-in-django/
from django.db.models.signals import post_delete, pre_save
from django.dispatch import receiver
from django.db import models

""" Whenever ANY model is deleted, if it has a file field on it, delete the associated file too"""
@receiver(post_delete)
def delete_files_when_row_deleted_from_db(sender, instance, **kwargs):
    for field in sender._meta.concrete_fields:
        if isinstance(field,models.FileField):
            instance_file_field = getattr(instance,field.name)
            delete_file_if_unused(sender,instance,field,instance_file_field)
            
""" Delete the file if something else get uploaded in its place"""
@receiver(pre_save)
def delete_files_when_file_changed(sender,instance, **kwargs):
    # Don't run on initial save
    if not instance.pk:
        return
    for field in sender._meta.concrete_fields:
        if isinstance(field,models.FileField):
            #its got a file field. Let's see if it changed
            try:
                instance_in_db = sender.objects.get(pk=instance.pk)
            except sender.DoesNotExist:
                # We are probably in a transaction and the PK is just temporary
                # Don't worry about deleting attachments if they aren't actually saved yet.
                return
            instance_in_db_file_field = getattr(instance_in_db,field.name)
            instance_file_field = getattr(instance,field.name)
            if instance_in_db_file_field.name != instance_file_field.name:
                delete_file_if_unused(sender,instance,field,instance_in_db_file_field)

""" Only delete the file if no other instances of that model are using it"""    
def delete_file_if_unused(model,instance,field,instance_file_field):
    dynamic_field = {}
    dynamic_field[field.name] = instance_file_field.name
    other_refs_exist = model.objects.filter(**dynamic_field).exclude(pk=instance.pk).exists()
    if not other_refs_exist:
        instance_file_field.delete(False)
    
