# Generated by Django 3.2.12 on 2022-02-09 14:03

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='MBTI_Res',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Name', models.CharField(max_length=50)),
                ('Cnt', models.IntegerField(default=0)),
                ('Data_res', models.JSONField()),
            ],
        ),
        migrations.CreateModel(
            name='Questions',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Number', models.IntegerField(default=0)),
                ('Content', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Sep_models',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Sep', models.CharField(max_length=20)),
            ],
        ),
        migrations.CreateModel(
            name='Choice',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Content', models.CharField(max_length=100)),
                ('FK_Questions_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.questions')),
                ('FK_Sep', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.sep_models')),
            ],
        ),
    ]
