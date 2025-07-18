# PEG
PEG估值（Price/Earnings to Growth ratio）是一种结合了市盈率（PE）和公司盈利增长率（Growth rate）的估值指标，常用于评估股票价格相对于其增长潜力的合理性。

# 使用场景和注意事项
PEG适合高速增长的成长股估值
需准确预估增长率，增长率波动会显著影响估值
对于无增长或负增长企业不适用

```py
def peg_valuation(eps, growth_rate_percent, target_peg=1):
    """
    PEG估值计算
    
    :param eps: 当前每股收益
    :param growth_rate_percent: 预期年增长率，百分比形式，如15表示15%
    :param target_peg: 目标PEG，一般取1
    :return: 合理股价
    """
    if growth_rate_percent <= 0:
        raise ValueError("增长率必须大于0")
    pe = growth_rate_percent * target_peg
    price = eps * pe
    return price

# 示例
eps = 2
growth_rate = 15  # 15%

price = peg_valuation(eps, growth_rate)
print(f"合理股价估值: {price:.2f}")

```