import json
data = open('data.txt','r')

text = data.read()

beg=0
total_len = len(text)

data_obj = {"airports":[]}


while beg<total_len:
    beg_name = text.find('name,',beg,total_len)
    if beg_name == -1:
        break
    else:
        beg = beg_name + 5
    end_name = text.find(',1,description',beg_name,total_len)
    if end_name == -1:
        break
    else:
        name = text[beg:end_name]
        end_description = text.find(',1,,,,',end_name,total_len)
        description = text[end_name+15:end_description]
        data_obj["airports"].append({
            "name":name,
            "description":description,
            "city":"",
            "country":""
        })

with open('data.json', 'w') as outfile:
    json.dump(data_obj, outfile, indent=4, sort_keys=True, separators=(',', ':'))

    
