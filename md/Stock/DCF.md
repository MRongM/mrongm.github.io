---
layout: default
---

# DCF的适用范围

1. 现金流稳定且可预测的公司
有明确的、可持续的自由现金流（FCF）
行业成熟、业务模式清晰，财务数据稳定
例如大型蓝筹股、传统制造业、公共事业、消费品等

2. 成长型公司（但需有合理现金流预测）
新兴企业如果能合理预测未来现金流（包括亏损转正时间点）
需要较多假设，但仍可通过分阶段DCF模型估值

3. 资本密集型行业
需要大量固定资产投资，资本支出显著，现金流重要
例如能源、基础设施、电信等

4. 并购估值和项目投资分析
评估并购目标、资本项目或投资项目未来价值

| 适用范围        | 不适用范围       |
| ----------- | ----------- |
| 稳定且可预测现金流公司 | 现金流不确定、亏损公司 |
| 成熟行业        | 新兴早期企业      |
| 资本密集行业      | 高度波动、周期性行业  |
| 并购及项目投资评估   | 无可靠数据时估值不准确 |


# 永续增长率取值

| 范围           | 适用情境         | 背后逻辑                  |
| ------------ | ------------ | --------------------- |
| **0% \~ 2%** | 非成长性、成熟行业公司  | 例如公用事业、老牌制造商          |
| **2% \~ 3%** | 普通企业的长期增长    | 接近**长期通胀率**和**GDP增速** |
| **3% \~ 4%** | 具有持续竞争力或科技行业 | 如 Google、Apple、特斯拉等   |
| **>4%**      | 不推荐（极乐观）     | 很难长期保持超高增长，模型失真       |

## 成熟行业公司：2% 是上限
## 有增长预期但竞争强的公司：用 2.5%–3%
## 有稳定护城河和长期创新能力的公司：最多 3.5%–4%

# 贴现率取值

| 公司类型          | 推荐贴现率（WACC） |
| ------------- | ----------- |
| 大型成熟企业（如可口可乐） | 6%–8%       |
| 稳定科技股（如苹果）    | 7%–9%       |
| 高增长科技公司（如特斯拉） | 9%–12%      |
| 风险较高的新创企业     | 12%–18%+    |

# 年数与增长率选取

| 年数     | 适用场景                   |
| ------ | ---------------------- |
| 3–5 年  | 成熟企业、增长放缓公司            |
| 5–7 年  | 稳定增长型公司，如大部分科技股        |
| 7–10 年 | 高成长企业，早期扩张型（如SaaS、新能源） |

| 场景 | 年增长率 | 预测期 | 永续增长率 | 折现率 |
| -- | ---- | --- | ----- | --- |
| 保守 | 8%   | 5 年 | 2%    | 13% |
| 中性 | 12%  | 5 年 | 3%    | 11% |
| 乐观 | 18%  | 7 年 | 4%    | 10% |

# 计算公式

```py
def dcf_valuation(fcf, growth_rate, discount_rate, years, terminal_growth_rate):
    """
    fcf: 初始自由现金流（例如：1000000 表示 100 万）
    growth_rate: 年增长率（例如 0.1 表示 10%）
    discount_rate: 折现率 / 贴现率（WACC，例如 0.08 表示 8%）
    years: 明确预测的年数
    terminal_growth_rate: 永续增长率（例如 0.03 表示 3%）
    """
    discounted_cash_flows = []
    for i in range(1, years + 1):
        projected_fcf = fcf * ((1 + growth_rate) ** i)
        discounted_fcf = projected_fcf / ((1 + discount_rate) ** i)
        discounted_cash_flows.append(discounted_fcf)

    # 永续价值（Terminal Value）计算（年数后）
    terminal_value = (fcf * ((1 + growth_rate) ** years)) * (1 + terminal_growth_rate) / (discount_rate - terminal_growth_rate)
    discounted_terminal_value = terminal_value / ((1 + discount_rate) ** years)

    # 总估值 = 所有现金流现值之和 + 永续价值现值
    total_value = sum(discounted_cash_flows) + discounted_terminal_value

    return total_value, discounted_cash_flows, discounted_terminal_value

def dcf(fcf, g, wacc, years, term_g):
    cfvs = [fcf * (1+g)**i / (1+wacc)**i for i in range(1, years+1)]
    tval = (fcf*(1+g)**years)*(1+term_g)/(wacc-term_g)/(1+wacc)**years
    return sum(cfvs) + tval

# total_value = dcf(initial_fcf, growth, discount, forecast_years, terminal_growth)

num = 1088 * 10**8 # apple
num = 720 * 10**8 #英伟达
num = 24.05 * 10**8 # amd
num = 38.219 * 10**8 # amzon  
num = 6.09 * 10**8 # oxy 36
num = 16.19 * 10**8 # oxy 36

initial_fcf = 6.09 * 10**8  # 初始自由现金流：100万
growth = 0.2           # 年增长率 10%
discount = 0.08        # 折现率 8%
forecast_years = 5     # 年数
terminal_growth = 0.03 # 永续增长率 3%
floating_shares = 9.81 * 10**8 #流通股数

value, cash_flows, terminal = dcf_valuation(initial_fcf, growth, discount, forecast_years, terminal_growth)
print("各年现金流现值：", [round(cf, 2) for cf in cash_flows])
print("终值现值: {:.2f} e: {:.2e}".format(terminal, terminal))
print("估算企业价值：{:.2f} e:{:.2e} price: {:.2f}".format(value, value, value/floating_shares))



```