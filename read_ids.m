function ids = read_ids(fname)
fid=fopen(fname);
x=textscan(fid,'%s');
fclose(fid);
ids=x{1};
end