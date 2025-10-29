from django.contrib.auth.models import User
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):

    password = serializers.CharField(write_only=True,
                                     style = {'input_type':'password'},
                                     min_length = 8)

    class Meta:
        model = User
        fields = ['username', 'email', 'password']
    
    #create our user via member function of ModelSerializer...
    def create(self, validated_data):

        #create user in db...
        user = User.objects.create_user(
            #this order matters
            validated_data['username'],
            validated_data['email'],
            validated_data['password'],
        )

        return user