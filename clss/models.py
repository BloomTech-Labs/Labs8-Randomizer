from django.db import models
from uuid import uuid4

class Clss(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    student_name_first = models.CharField(max_length=200)
    student_name_last = models.CharField(max_length=200)
    #total_average = models.DecimalField(..., max_digits=6, decimal_places=1)
    created_at = models.DateTimeField(auto_now_add=True)
    last_modified = models.DateTimeField(auto_now=True)
