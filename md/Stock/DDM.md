
DDM（股利折现模型，Dividend Discount Model）是一种基于“未来股息”的股票估值方法，核心思想是：
股票的价值等于未来所有股息的现值之和。

| 限制      | 说明                |
| ------- | ----------------- |
| 必须发股息   | 不发股息的公司无法估值       |
| 股息增长可预测 | 不适合波动剧烈或不稳定的企业    |
| 对贴现率敏感  | r 与 g 差值变小，估值会非常高 |

| 模型          | 用途               |
| ----------- | ---------------- |
| Zero        | 优先股、国企、不增长公司     |
| Gordon      | 成熟稳定公司，长期可预测     |
| Two-Stage   | 成长期转稳定的公司        |
| H 模型        | 增长逐年放缓（自然过渡）     |
| Supernormal | 股息起伏大、初创或不规则增长公司 |


```py
def ddm_constant_growth(D1, r, g):
    """
    恒定增长股利折现模型（Gordon模型）
    :param D1: 下一年的股息
    :param r: 贴现率（如 0.09 表示 9%）
    :param g: 股息增长率（如 0.05 表示 5%）
    :return: 股票估值
    """
    if r <= g:
        raise ValueError("贴现率必须大于增长率")
    return D1 / (r - g)


def ddm_zero_growth(D, r):
    """
    零增长股利模型
    :param D: 每年固定股息
    :param r: 贴现率
    :return: 股票估值
    """
    return D / r


def ddm_two_stage(D0, high_growth_years, g1, g2, r):
    """
    两阶段增长模型（高增长期 + 永续期）
    :param D0: 当前股息
    :param high_growth_years: 高增长期年数
    :param g1: 高增长期的年增长率
    :param g2: 永续期的年增长率
    :param r: 贴现率
    :return: 股票估值
    """
    dividends = []
    D = D0
    for year in range(1, high_growth_years + 1):
        D *= (1 + g1)
        dividends.append((year, D))

    # 计算终值（从高增长末年开始）
    D_terminal = D * (1 + g2)
    P_terminal = D_terminal / (r - g2)

    # 折现所有现金流
    total_value = 0
    for year, div in dividends:
        total_value += div / ((1 + r) ** year)

    # 折现终值
    total_value += P_terminal / ((1 + r) ** high_growth_years)

    return total_value

def ddm_h_model(D0, gS, gL, r, H):
    """
    H 模型估值（线性过渡增长模型）
    
    :param D0: 当前年度股息（上一年）
    :param gS: 起始的高增长率（如 0.15）
    :param gL: 永续期的稳定增长率（如 0.05）
    :param r: 投资者要求的贴现率（如 0.09）
    :param H: 过渡期的一半（例如 10 年过渡期，H=5）
    :return: 股票估值
    """
    if r <= gL:
        raise ValueError("贴现率必须大于长期增长率")
        
    term1 = (D0 * (1 + gL)) / (r - gL)
    term2 = D0 * H * (gS - gL) / (r - gL)
    return term1 + term2

def ddm_supernormal(dividends, g_terminal, r):
    """
    dividends: list of known未来n年的股息，比如 [1.2, 1.3, 1.4]
    g_terminal: 永续期增长率
    r: 贴现率
    """
    N = len(dividends)
    pv = 0
    for t in range(N):
        pv += dividends[t] / ((1 + r) ** (t + 1))

    D_terminal = dividends[-1] * (1 + g_terminal)
    P_terminal = D_terminal / (r - g_terminal)
    pv += P_terminal / ((1 + r) ** N)

    return pv

```