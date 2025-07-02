---
layout: default
---

# One-Line-Shell

## Check All K8S Status

```sh
echo "=========nodes" && kubectl get nodes -o wide --all-namespaces && echo "=========service" && kubectl get service -o wide --all-namespaces && echo "=========deploy" && kubectl get deploy -o wide --all-namespaces && echo "=========pods" && kubectl get pods -o wide --all-namespaces
```

## Check K8S Pod Error

```sh
ns=namespace && pod=podname && echo "=========describe" && kubectl describe pod "$pod" -n "$ns" && echo "=========log" && kubectl logs "$pod" -n "$ns"
```

