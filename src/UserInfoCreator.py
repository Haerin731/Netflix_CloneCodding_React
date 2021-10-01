import json

file_path = "./UserInfo.json"

data = {}
data['users'] = []
data['users'].append({
    "name": "베티",
    "favorites" : [
        "TV프로그램, 코미디",
        "액션 & 어드벤쳐"],
})

print(data)
with open(file_path, 'w', encoding="utf-8") as outfile:
    json.dump(data, outfile, indent='\t', ensure_ascii=False)