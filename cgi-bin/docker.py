#!/usr/bin/python3

import cgi
import subprocess as sp

print('Content-type: text/html')
print('Access-Control-Allow-Origin: *')
print()

data = cgi.FieldStorage()
cmd = data.getvalue('cmd')

op = sp.getstatusoutput(f'sudo {cmd}')
if(op[0]==0):
    print(op[1])
else:
    print('Some Server Error Occured')