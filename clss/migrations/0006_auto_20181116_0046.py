# Generated by Django 2.0.9 on 2018-11-16 00:46

from django.db import migrations, models
import django.db.models.manager


class Migration(migrations.Migration):

    dependencies = [
        ('clss', '0005_auto_20181116_0010'),
    ]

    operations = [
        migrations.AlterModelManagers(
            name='clssname',
            managers=[
                ('mangager', django.db.models.manager.Manager()),
            ],
        ),
        migrations.AlterField(
            model_name='participation',
            name='date',
            field=models.DateTimeField(auto_now_add=True),
        ),
    ]
