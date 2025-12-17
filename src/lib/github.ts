import fetch from "node-fetch";

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

export async function getContributionData(username: string) {
  const query = `
    query ($username: String!) {
      user(login: $username) {
        contributionsCollection {
          contributionCalendar {
            weeks {
              contributionDays {
                date
                contributionCount
                color
              }
            }
          }
        }
      }
    }
  `;

  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${GITHUB_TOKEN}`,
    },
    body: JSON.stringify({ query, variables: { username } }),
  });

  const data = await response.json() as any;

  const weeks = data.data.user.contributionsCollection.contributionCalendar.weeks;
  const days = weeks.flatMap((week: any) => week.contributionDays);

  const nineMonthsAgo = new Date();
  nineMonthsAgo.setMonth(nineMonthsAgo.getMonth() - 9);
  nineMonthsAgo.setHours(0, 0, 0, 0);

  return days
    .filter((day: any) => new Date(day.date) >= nineMonthsAgo)
    .map((day: any) => ({
      date: day.date,
      count: day.contributionCount,
      level: getActivityLevel(day.contributionCount)
    }));
}

function getActivityLevel(count: number): 0 | 1 | 2 | 3 | 4 {
  if (count === 0) return 0;
  if (count <= 2) return 1;
  if (count <= 5) return 2;
  if (count <= 9) return 3;
  return 4;
}