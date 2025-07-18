# 什么是 SOTP 估值？
适用于业务多元化、结构复杂的公司
对每个独立业务或子公司分别估值，采用最合适的方法（如PE、DCF、EV/EBITDA等）
把各业务估值加总，减去净负债，得到整体企业价值

| 优点             | 缺点              |
| -------------- | --------------- |
| 适合多元化、结构复杂企业估值 | 需要详细业务数据，工作量大   |
| 灵活选用估值方法       | 业务间协同和内部转移定价难估算 |
| 能反映公司内部各部分真实价值 | 对假设敏感，估值不易统一    |

```py
def sotp_valuation(parts, net_debt, total_shares):
    """
    :param parts: dict，每个业务估值，{'业务A': 200, '业务B': 150}
    :param net_debt: 净债务
    :param total_shares: 总股本
    :return: 每股价值
    """
    total_value = sum(parts.values())
    equity_value = total_value - net_debt
    per_share_value = equity_value / total_shares
    return per_share_value

# 示例
parts_valuation = {
    '业务A': 200,
    '业务B': 150
}
net_debt = 50
total_shares = 100

price = sotp_valuation(parts_valuation, net_debt, total_shares)
print(f"整体每股估值: {price:.2f}元")

```