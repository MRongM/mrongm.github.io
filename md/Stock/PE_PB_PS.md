---
layout: default
---

# 估值

| 估值指标 | 适用行业/情况     | 优点     | 缺点       |
| ---- | ----------- | ------ | -------- |
| PE   | 盈利稳定企业      | 简单直观   | 不适合亏损公司  |
| PB   | 银行、地产等资产密集型 | 反映资产价值 | 可能低估无形资产 |
| PS   | 初创、亏损高速成长企业 | 适用亏损公司 | 忽略利润质量   |

```py

def relative_valuation(eps, bvps, sps, pe_ratio, pb_ratio, ps_ratio):
    """
    相对估值计算函数
    
    :param eps: 每股收益
    :param bvps: 每股净资产
    :param sps: 每股销售收入
    :param pe_ratio: 行业平均市盈率
    :param pb_ratio: 行业平均市净率
    :param ps_ratio: 行业平均市销率
    :return: dict，包含PE、PB、PS估值结果
    """
    pe_value = eps * pe_ratio
    pb_value = bvps * pb_ratio
    ps_value = sps * ps_ratio
    
    return {
        'PE估值': pe_value,
        'PB估值': pb_value,
        'PS估值': ps_value
    }


# 示例输入
eps = 3.0    # 每股收益
bvps = 20.0  # 每股净资产
sps = 50.0   # 每股销售收入

industry_pe = 15.0
industry_pb = 1.5
industry_ps = 2.0

valuation = relative_valuation(eps, bvps, sps, industry_pe, industry_pb, industry_ps)
print(f"估值结果（单位：元）:{valuation}")


def ps_valuation(revenue, ps_ratio):
    return revenue * ps_ratio

revenue = 3.79e8    # 3.79 亿美元
ps_ratio = 5        # 假设倍数
total_shares = 2.75e8  # 2.75 亿股

valuation = ps_valuation(revenue, ps_ratio)
per_share_price = valuation / total_shares

print(f"Cleanspark估值总市值约为: ${valuation / 1e9:.2f} 亿美元")
print(f"Cleanspark每股估值约为: ${per_share_price:.2f}")

```