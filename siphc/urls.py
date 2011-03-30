from django.conf.urls.defaults import patterns, include, url
from django.views.generic.simple import direct_to_template
from siphc import settings
# Uncomment the next two lines to enable the admin:
# from django.contrib import admin
# admin.autodiscover()

urlpatterns = patterns('',
    url(r'^auth/logout/$', 'django.contrib.auth.views.logout_then_login'),
    url(r'^auth/', include('django.contrib.auth.urls')),

    url(r'^$', direct_to_template, {'template': 'main/home.html'}),
    url(r'^hosting/', include('siphc.hosting.urls')),
)

urlpatterns += patterns('',
  (r'^media/(.*)','django.views.static.serve',{'document_root':settings.MEDIA_ROOT}),
)
