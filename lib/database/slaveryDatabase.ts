// lib/database/slaveryDatabase.ts

/**
 * Represents modern slavery and its comparison to historical slavery.
 */
interface SlaveryComparison {
    definition: string;
    forms: string[];
    causes: string[];
    impacts: string[];
    statistics: { year: number; statistic: string; }[];
}

/**
 * Modern slavery includes various forms of exploitation:
 */
const modernSlavery: SlaveryComparison = {
    definition: "Modern slavery is the exploitation of people through coercion, deception, and force, preventing them from leaving.",
    forms: ["Human trafficking", "Forced labor", "Debt bondage", "Child labor", "Forced marriage"],
    causes: ["Poverty", "Lack of education", "Discrimination", "Corruption", "Demand for cheap labor"],
    impacts: ["Human rights violations", "Economic costs", "Social instability", "Health issues"],
    statistics: [
        { year: 2021, statistic: "Approx. 40.3 million people are estimated to be victims of modern slavery globally." },
        { year: 2020, statistic: "Over 50% of victims are in forced labor situations." },
    ]
};

/**
 * Historical slavery, as in the transatlantic slave trade:
 */
const historicalSlavery: SlaveryComparison = {
    definition: "Historical slavery involved the ownership of people, where individuals were considered property and could be bought, sold, or traded.",
    forms: ["Chattel slavery", "Debt slavery", "Bonded labor"],
    causes: ["Economic gain", "Colonialism", "Racism", "Social hierarchy"],
    impacts: ["Cultural disintegration", "Generational trauma", "Economic disparities"],
    statistics: [
        { year: 1807, statistic: "The British Parliament abolished the slave trade." },
        { year: 1865, statistic: "Slavery was formally abolished in the United States." },
    ]
};

/**
 * Combination of modern and historical slavery for comparison.
 */
const slaveryDatabase: { modern: SlaveryComparison; historical: SlaveryComparison } = {
    modern: modernSlavery,
    historical: historicalSlavery
};

export default slaveryDatabase;