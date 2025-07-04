// src/ai/flows/smart-trading-strategy.ts
'use server';

/**
 * @fileOverview Generates personalized trading strategies based on real-time market conditions.
 *
 * - getSmartTradingStrategy - A function that generates a trading strategy.
 * - SmartTradingStrategyInput - The input type for the getSmartTradingStrategy function.
 * - SmartTradingStrategyOutput - The return type for the getSmartTradingStrategy function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SmartTradingStrategyInputSchema = z.object({
  marketCondition: z.string().describe('The current market condition.'),
  riskTolerance: z.enum(['low', 'medium', 'high']).describe('The risk tolerance of the trader.'),
  tradingGoal: z.string().describe('The trading goal of the trader (e.g., long-term investment, short-term profit).'),
  assetType: z.enum(['stock', 'crypto']).describe('The type of asset to trade (stock or crypto).'),
});

export type SmartTradingStrategyInput = z.infer<typeof SmartTradingStrategyInputSchema>;

const SmartTradingStrategyOutputSchema = z.object({
  strategy: z.string().describe('The generated trading strategy.'),
  explanation: z.string().describe('An explanation of the strategy and why it is suitable for the given market conditions and risk tolerance.'),
});

export type SmartTradingStrategyOutput = z.infer<typeof SmartTradingStrategyOutputSchema>;

export async function getSmartTradingStrategy(input: SmartTradingStrategyInput): Promise<SmartTradingStrategyOutput> {
  return smartTradingStrategyFlow(input);
}

const prompt = ai.definePrompt({
  name: 'smartTradingStrategyPrompt',
  input: {schema: SmartTradingStrategyInputSchema},
  output: {schema: SmartTradingStrategyOutputSchema},
  prompt: `You are an expert trading strategist. Based on the current market conditions, risk tolerance, trading goal, and asset type, generate a personalized trading strategy.

Market Condition: {{{marketCondition}}}
Risk Tolerance: {{{riskTolerance}}}
Trading Goal: {{{tradingGoal}}}
Asset Type: {{{assetType}}}

Consider the following factors when creating the strategy:

*   Market volatility
*   Potential risks and rewards
*   Time horizon
*   Capital allocation

Provide a clear and concise strategy along with a detailed explanation.
`,
});

const smartTradingStrategyFlow = ai.defineFlow(
  {
    name: 'smartTradingStrategyFlow',
    inputSchema: SmartTradingStrategyInputSchema,
    outputSchema: SmartTradingStrategyOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
