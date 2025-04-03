
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const SipEducationContent = () => {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-bold text-primary mb-3">What is a Step Up SIP?</h2>
        <p className="text-charcoal-DEFAULT leading-relaxed">
          A Step Up SIP (Systematic Investment Plan) is an enhanced version of the regular SIP where your investment amount 
          increases by a predetermined percentage each year. This gradual increase in investment aligns well with your 
          likely rising income levels over time, allowing you to invest more as your earning capacity grows.
        </p>
      </section>
      
      <section>
        <h2 className="text-2xl font-bold text-primary mb-3">How Does a Step Up SIP Work?</h2>
        <p className="text-charcoal-DEFAULT leading-relaxed mb-4">
          In a Step Up SIP, your monthly investment amount increases annually at a fixed rate. For instance, if you start 
          with a monthly investment of ₹5,000 and set an annual step-up rate of 10%, your monthly contribution would become 
          ₹5,500 in the second year, ₹6,050 in the third year, and so on. This strategy leverages the power of compounding 
          and can significantly enhance your wealth creation potential compared to regular SIPs.
        </p>
        <Card className="bg-cream-DEFAULT border-l-4 border-primary">
          <CardContent className="p-4">
            <div className="flex mb-2">
              <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3">
                <span className="text-sm">i</span>
              </div>
              <h3 className="text-lg font-semibold text-primary">Example</h3>
            </div>
            <p className="text-sm text-charcoal-DEFAULT">
              If you start a Step Up SIP with an initial monthly investment of ₹10,000 with a 10% annual step-up rate, 
              your investment would grow as follows:
            </p>
            <ul className="mt-2 space-y-1 text-sm">
              <li>Year 1: ₹10,000 per month (₹1,20,000 annually)</li>
              <li>Year 2: ₹11,000 per month (₹1,32,000 annually)</li>
              <li>Year 3: ₹12,100 per month (₹1,45,200 annually)</li>
              <li>Year 4: ₹13,310 per month (₹1,59,720 annually)</li>
              <li>Year 5: ₹14,641 per month (₹1,75,692 annually)</li>
            </ul>
          </CardContent>
        </Card>
      </section>
      
      <section>
        <h2 className="text-2xl font-bold text-primary mb-3">Benefits of Step Up SIP</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold text-primary mb-2">Aligns with Income Growth</h3>
            <p className="text-charcoal-DEFAULT text-sm">
              As your income increases over time due to career advancement or salary hikes, Step Up SIPs allow you to 
              proportionally increase your investments, maintaining a consistent savings rate.
            </p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold text-primary mb-2">Enhanced Wealth Creation</h3>
            <p className="text-charcoal-DEFAULT text-sm">
              By increasing your investment amount each year, you potentially accumulate significantly more wealth 
              compared to a regular SIP with a constant investment amount.
            </p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold text-primary mb-2">Counters Inflation</h3>
            <p className="text-charcoal-DEFAULT text-sm">
              Regular step-ups help your investments keep pace with inflation, ensuring that your purchasing power 
              is maintained or enhanced over time.
            </p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold text-primary mb-2">Disciplined Approach</h3>
            <p className="text-charcoal-DEFAULT text-sm">
              Step Up SIPs enforce financial discipline by automatically increasing your investment commitment annually, 
              helping you avoid the temptation to spend surplus income.
            </p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold text-primary mb-2">Power of Compounding</h3>
            <p className="text-charcoal-DEFAULT text-sm">
              With larger amounts being invested each year, the power of compounding works even more effectively, 
              potentially accelerating your journey toward financial goals.
            </p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold text-primary mb-2">Goal-Based Planning</h3>
            <p className="text-charcoal-DEFAULT text-sm">
              Step Up SIPs are particularly beneficial for long-term financial goals such as retirement planning, 
              children's education, or purchasing a property.
            </p>
          </div>
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-bold text-primary mb-3">When to Use a Step Up SIP Calculator</h2>
        <div className="space-y-4 text-charcoal-DEFAULT">
          <p className="leading-relaxed">
            The Step Up SIP calculator can be an invaluable tool in various scenarios:
          </p>
          
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Financial Planning:</strong> When creating a comprehensive financial plan, use this calculator to project
              how your investments might grow with gradually increasing contributions.
            </li>
            <li>
              <strong>Goal Revision:</strong> If you need to accelerate your progress toward a financial goal, the calculator 
              can help determine how much additional investment is required.
            </li>
            <li>
              <strong>Retirement Planning:</strong> Plan for retirement by simulating how step-up investments over decades 
              can build a substantial corpus to support your post-retirement lifestyle.
            </li>
            <li>
              <strong>Comparing Strategies:</strong> Compare the potential outcomes of regular SIPs versus Step Up SIPs to 
              make more informed investment decisions.
            </li>
            <li>
              <strong>Salary Increment Planning:</strong> After receiving a salary increment, use the calculator to determine 
              how much of that increase you can allocate to your investments.
            </li>
          </ul>
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-bold text-primary mb-3">Factors to Consider</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card className="border-l-4 border-primary">
            <CardContent className="p-4">
              <h3 className="font-semibold text-primary mb-2">Financial Capacity</h3>
              <p className="text-sm text-charcoal-DEFAULT">
                Be realistic about your ability to increase investments annually. Choose a step-up percentage that aligns 
                with your expected income growth to ensure sustainability.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-l-4 border-secondary">
            <CardContent className="p-4">
              <h3 className="font-semibold text-primary mb-2">Investment Horizon</h3>
              <p className="text-sm text-charcoal-DEFAULT">
                Step Up SIPs work best for long-term goals where the power of compounding and incremental investments 
                can significantly impact the final corpus.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-l-4 border-gold-DEFAULT">
            <CardContent className="p-4">
              <h3 className="font-semibold text-primary mb-2">Return Expectations</h3>
              <p className="text-sm text-charcoal-DEFAULT">
                Be conservative in your return expectations. While historical market returns might be higher, using 
                moderate projections can help avoid disappointment.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-l-4 border-softblue-DEFAULT">
            <CardContent className="p-4">
              <h3 className="font-semibold text-primary mb-2">Risk Tolerance</h3>
              <p className="text-sm text-charcoal-DEFAULT">
                Consider your risk tolerance when selecting mutual funds or other investment vehicles for your Step Up SIP. 
                Higher expected returns typically come with higher risk.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-l-4 border-charcoal-DEFAULT">
            <CardContent className="p-4">
              <h3 className="font-semibold text-primary mb-2">Regular Monitoring</h3>
              <p className="text-sm text-charcoal-DEFAULT">
                Periodically reassess your Step Up SIP plan based on changes in financial circumstances, goals, or market conditions. 
                Adjust your strategy accordingly.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-l-4 border-primary">
            <CardContent className="p-4">
              <h3 className="font-semibold text-primary mb-2">Tax Implications</h3>
              <p className="text-sm text-charcoal-DEFAULT">
                Be aware of the tax treatment of different types of mutual funds and investment options to optimize your 
                after-tax returns.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-bold text-primary mb-3">Conclusion</h2>
        <p className="text-charcoal-DEFAULT leading-relaxed mb-4">
          A Step Up SIP is a powerful investment strategy that can significantly enhance your wealth creation journey. 
          By systematically increasing your investment amount each year, you not only counter inflation but also leverage 
          your growing income to build a larger corpus for your financial goals. The Step Up SIP calculator helps you 
          visualize this growth trajectory, enabling you to make informed decisions about your investment strategy.
        </p>
        <p className="text-charcoal-DEFAULT leading-relaxed mb-4">
          Remember, consistency is key in any investment approach. Start your Step Up SIP with an amount you're comfortable with, 
          and gradually increase it as your income grows. This disciplined approach, combined with the power of compounding, 
          can help you achieve your financial dreams sooner than you might think.
        </p>
        <p className="text-charcoal-DEFAULT leading-relaxed">
          Use our interactive calculator above to explore different scenarios and find the Step Up SIP plan that best suits 
          your financial goals and capacity.
        </p>
      </section>
    </div>
  );
};

export default SipEducationContent;
