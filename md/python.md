---
layout: default
---

# One-Line-Python

## IPython Shell Debugger

```py
from IPython import embed;embed();exit(1)
```

## IPython Autoreload

```sh
%load_ext autoreload
%autoreload now
```

## Pandas Export xlsx

```py
import pandas as pd;pd.DataFrame(data).to_excel("data.xlsx")
```

## JSON Export Import

```py
import json; json.dump(data, open("data.json", "w", encoding="utf-8"), ensure_ascii=False, indent=4)
import json; data=json.load(open("data.json", "r", encoding="utf-8"))
```
'
## PKL Export Import

```py
import pickle; pickle.dump(data, open('data.pkl', 'wb'))
import pickle; data = pickle.load(open('data.pkl', 'rb'))
```

## Gen curl

```py
import curlify;curlify.to_curl(response.request)
```

## PIP Relative

```sh
pip config set global.index-url https://mirrors.tuna.tsinghua.edu.cn/pypi/web/simple

pip install --upgrade pip -i https://mirrors.tuna.tsinghua.edu.cn/pypi/web/simple --trusted-host mirrors.tuna.tsinghua.edu.cn
pip install requests -i https://mirrors.tuna.tsinghua.edu.cn/pypi/web/simple --trusted-host mirrors.tuna.tsinghua.edu.cn

pip freeze | xargs pip uninstall -y
pip list --format=freeze | xargs pip uninstall -y
pip list --format=freeze | grep -v '^\(pip\|setuptools\|wheel\)' | xargs pip uninstall -y
```

## Django Relative

```python
from rest_framework.test import APIClient
from django.contrib.auth import get_user_model
from django.urls import reverse

callback_id = "ac2313df0c4b4a7cb14859431ffe080d"
data = {}
client = APIClient()

username="admin"
User = get_user_model()
client.force_login(User.objects.get(username=username))

url = reverse('application.approve_v2', kwargs={"callback_id": callback_id})
result = client.post("/api/v1/applications/ac2313df0c4b4a7cb14859431ffe080d/approve/", data=data)
```

