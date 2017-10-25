clc,clear,close all;
old_list=read_ids('list.txt');
new_list=read_ids('new_list.txt');

setdiff(old_list,new_list)
setdiff(new_list,old_list)