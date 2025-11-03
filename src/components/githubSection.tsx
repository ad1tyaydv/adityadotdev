import { getContributionCount } from "../app/lib/github";

export default async function ProofOfWorkSection() {
  const contributions = await getContributionCount("ad1tyaydv");

  return (
    <section className="py-6 px-4 text-center bg-white text-black dark:bg-[#19181A] dark:text-white transition-colors duration-300">
      <h2 className="text-3xl font-bold mb-2">Proof of Work</h2>

      <div className="flex justify-center overflow-x-auto">
        <img
          src="https://ghchart.rshah.org/green/ad1tyaydv"
          alt="GitHub contribution graph"
          className="max-w-4xl"
        />
      </div>

      <div className="flex justify-between items-center max-w-4xl mx-auto mt-4 text-xs text-gray-700 dark:text-gray-300">
        <p className="whitespace-nowrap">
          {contributions.toLocaleString()} contributions in the last year
        </p>

        <div className="flex items-center gap-0.5 whitespace-nowrap">
          <span className="mr-1">Less</span>
          <div className="w-3 h-3 bg-gray-200 dark:bg-gray-700 rounded-sm" />
          <div className="w-3 h-3 bg-green-200 dark:bg-green-800 rounded-sm" />
          <div className="w-3 h-3 bg-green-400 dark:bg-green-600 rounded-sm" />
          <div className="w-3 h-3 bg-green-500 dark:bg-green-500 rounded-sm" />
          <div className="w-3 h-3 bg-green-600 dark:bg-green-400 rounded-sm" />
          <span className="ml-1">More</span>
        </div>
      </div>

      <hr className="mt-8 border-t border-gray-300 dark:border-gray-700 max-w-2xl mx-auto" />
    </section>
  );
}
