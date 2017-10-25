clc,clear,close all;
old_list=read_ids('list.txt');
rm_list=read_ids('remove.txt');
new_list=setdiff(old_list,rm_list);

fid=fopen('list.txt','w');
fprintf(fid,'%s\n',new_list{:});
fclose(fid);