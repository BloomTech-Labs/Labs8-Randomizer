# Generated by Django 2.1.3 on 2018-11-07 19:15

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Clss',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('student_name_first', models.CharField(max_length=200)),
                ('student_name_last', models.CharField(max_length=200)),
            ],
        ),
    ]
