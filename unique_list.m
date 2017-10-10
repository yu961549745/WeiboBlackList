clc,clear,close all;
f='list.txt';
x=load(f);
x=unique(x);
fid=fopen(f,'w');
fprintf(fid,'%d\n',x);
fclose(fid);