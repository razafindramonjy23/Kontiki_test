from django.db import transaction
from django.contrib.auth import get_user_model, authenticate, logout, login
from django.contrib.admin.views.decorators import staff_member_required
from django.shortcuts import render, redirect


