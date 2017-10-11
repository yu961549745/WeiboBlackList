clc,clear,close all;
x=load('list.txt');
y=load('remove.txt');
z=setdiff(x,y);

f='list.txt';
fid=fopen(f,'w');
fprintf(fid,'%d\n',z);
fclose(fid);