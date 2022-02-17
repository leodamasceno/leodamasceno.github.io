---
layout: default
---

## Dividend Stocks Investiment (Monthly Income)

Use this tool to calculate how much you need to invest in order to get paid monthly the value specified in the options below.

How much would you like to receive per month? Example: 2000<br>
<input type="text" id="monthly_income" name="monthly_income">

What's the total of your dividend yield (The percentage is already implied)? Example: 8.47<br>
<input type="text" id="dividend_yield" name="dividend_yield">

<button onclick="calculateDSI()">Calculate</button>

<p align="center">
    <section id="main-content">
        <label id="total_value"></label>
    </section>
</p>


<script src="calc.js"></script>

[back](./)
