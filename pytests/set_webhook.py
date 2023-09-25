import requests


# response = requests.post("https://waba-sandbox.360dialog.io/v1/configs/webhook", headers= {
#     "D360-API-KEY": "DdmKxX_sandbox"
# }, json= {
#     "url": "https://c481-2804-d41-4219-e100-72fd-cf1a-14d9-df01.ngrok-free.app/"
# })

# print(response.json())

response = requests.post("https://waba.360dialog.io/v1/messages/", headers={
    "D360-API-KEY": "gmJDAJWQ85ToM1AX8ke6sP8sAK"
},
    json={
    "to": "5522998163260",
    "type": "template",
    "template": {
        "namespace": "c8ae5f90_307a_ca4c_b8f6_d1e2a2573574",
        "language": {
            "policy": "deterministic",
            "code": "PT_BR"
        },
        "name": "teste"
    }
})

# response = requests.patch("")

print(response.status_code)
print(response.json())
