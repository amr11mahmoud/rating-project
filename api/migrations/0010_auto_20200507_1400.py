# Generated by Django 3.0.5 on 2020-05-07 12:00

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0009_auto_20200507_1311'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='product',
            name='commentator_name',
        ),
        migrations.RemoveField(
            model_name='product',
            name='commentator_rate',
        ),
        migrations.RemoveField(
            model_name='product',
            name='comments',
        ),
    ]