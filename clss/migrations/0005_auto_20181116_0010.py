# Generated by Django 2.0.9 on 2018-11-16 00:10

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('clss', '0004_auto_20181115_2328'),
    ]

    operations = [
        migrations.AlterField(
            model_name='participation',
            name='id',
            field=models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False),
        ),
    ]
