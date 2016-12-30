import urllib
from bs4 import BeautifulSoup


url = "https://www.google.com/maps/d/u/0/viewer?mid=1Z1dI8hoBZSJNWFx2xr_MMxSxSxY&hl=en_US&ll=50.03793259999999%2C6.491228948437538&z=8"
page = urllib.urlopen(url).read()

content = BeautifulSoup(page,"lxml")

data = open('data.txt','w')

i = 0
for div in content.findAll('div'):
    print i
    text = u''.join(div.text).encode('utf-8').strip()
    data.write(text)
    break