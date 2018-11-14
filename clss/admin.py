from django.contrib import admin

from .models import Clss, Calendar
# Register your models here.


class ClssAdmin(admin.ModelAdmin):
    readonly_fields=('created_at','last_modified')


admin.site.register(Clss, ClssAdmin)
admin.site.register(Calendar)