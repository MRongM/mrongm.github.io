---
layout: default
---

# One-Line-Shell

## ssh

```sh
ssh-keygen
ssh-copy-id -i ~/.ssh/id_rsa.pub root@hostname_or_IP_address
ssh-keygen -R hostname_or_IP_address
```

## vim 
```sh
vim ~/.vimrc

set expandtab
set tabstop=4
set shiftwidth=4
set autoindent

:set expandtab
:set tabstop=4
:set shiftwidth=4
:set autoindent
```

## k8s status

```shell
echo "=========nodes" && kubectl get nodes -o wide --all-namespaces && echo "=========service" && kubectl get service -o wide --all-namespaces && echo "=========deploy" && kubectl get deploy -o wide --all-namespaces && echo "=========pods" && kubectl get pods -o wide --all-namespaces
```

## pod detail

```sh
ns=namespace && pod=podname && echo "=========describe" && kubectl describe pod "$pod" -n "$ns" && echo "=========log" && kubectl logs "$pod" -n "$ns"
```

## k8s image manage

```shell
ctr images ls

ctr -n k8s.io images ls

ctr images pull docker.io/library/nginx:latest

ctr -n k8s.io images pull gcr.io/google-containers/pause:3.6 --user "username:password"

ctr images export nginx_image.tar docker.io/library/nginx:latest

ctr -n k8s.io images import k8s_images.tar
```
