# Generated by Django 2.0.9 on 2018-11-26 17:22

from django.db import migrations
import django.db.models.manager


class Migration(migrations.Migration):

    dependencies = [
        ('clss', '0006_auto_20181116_0046'),
    ]

    operations = [
        migrations.AlterModelManagers(
            name='clssname',
            managers=[
                ('manager', django.db.models.manager.Manager()),
            ],
        ),
        migrations.AlterModelManagers(
            name='participation',
            managers=[
                ('manager', django.db.models.manager.Manager()),
            ],
        ),
    ]
