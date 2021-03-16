from django.db import models
from django.contrib.auth.models import AbstractBaseUser,BaseUserManager,PermissionsMixin

class UserManager(BaseUserManager):
    def _create_user(self,username,email,name,password,is_staff,is_superuser,**extra_fields):
        user = self.model(
            username = username,
            email = email,
            name = name,
            is_staff = is_staff,
            is_superuser = is_superuser,
            **extra_fields
        )
        user.set_password(password)
        user.save(using=self.db)
        return user

    def create_user(self,username,email,name,password = None,**extra_fields):
        return self._create_user(username,email,name,password,False,False,**extra_fields)
    
    def create_superuser(self,username,email,name,password = None,**extra_fields):
        return self._create_user(username, email, name, password, True, True, **extra_fields)

class User(AbstractBaseUser, PermissionsMixin):
    username = models.CharField('Username',unique = True, max_length=100)
    email = models.EmailField('Email', max_length=254,unique = True)
    name = models.CharField('Name', max_length=200, blank = True, null = True)
    last_name = models.CharField('Last name', max_length=200,blank = True, null = True)
    image = models.ImageField('Image Profile', upload_to='profile/', max_length=200,blank = True,null = True)
    is_active = models.BooleanField(default = True)
    is_staff = models.BooleanField(default = False)
    objects = UserManager()

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email','name']

    class Meta:
        verbose_name = "User"
        verbose_name_plural = "Users"

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email', 'name', 'last_name']

    def __str__(self):
        return f'{self.name} {self.last_name}'


class Planet(models.Model):
    name = models.CharField('Name Planet', max_length=200, blank = True, null = True)
    satellites = models.SmallIntegerField()
    diameter = models.FloatField()