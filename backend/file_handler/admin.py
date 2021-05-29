from django.contrib import admin

# Register your models here.
from .models import File


class FileAdmin(admin.ModelAdmin):
    list_display = ['owners', 'watchers', 'editors', 'isGlobal',
                    'fileName', 'datafile', 'uploadedOn', 'url', ]
    readonly_fields = ('url',)


admin.site.register(File)
