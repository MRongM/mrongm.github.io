
# EV/EBITDA 模型介绍
EV（企业价值） = 市值 + 净债务（总债务 - 现金及现金等价物）
EBITDA = Earnings Before Interest, Taxes, Depreciation, and Amortization（息税折旧摊销前利润）

EV/EBITDA的含义
表示公司整体运营产生的利润相对于企业价值的倍数。
比较不同资本结构公司的估值时，能剔除利息和折旧的影响，更纯粹反映经营业绩。

# 注意事项
EV/EBITDA 剔除资本结构和折旧差异，更适合重资产、资本结构复杂的行业。
EBITDA 不反映资本开支，长期现金流分析仍需结合 DCF。
净债务要准确，避免忽略或重复计算负债和现金。

```py
def ev_ebitda_valuation(ebitda, ev_ebitda_industry, net_debt):
    """
    使用EV/EBITDA模型估值
    
    :param ebitda: 目标公司EBITDA，单位一致（如美元）
    :param ev_ebitda_industry: 行业平均EV/EBITDA倍数
    :param net_debt: 净债务 = 总债务 - 现金，单位与ebitda相同
    :return: 每股估值
    """
    enterprise_value = ebitda * ev_ebitda_industry
    equity_value = enterprise_value - net_debt
    per_share_value = equity_value / total_shares
    return per_share_value
    
ebitda = 5e9
ev_ebitda_industry = 8
net_debt = 1e10
total_shares = 1e9

value = ev_ebitda_valuation(ebitda, ev_ebitda_industry, net_debt)
print(f"估值: {value:.2f} 每股估值: ${value/total_shares:.2f}")

```