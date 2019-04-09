import companyData from "./company-sample.json"
import positionsData from "./positions-sample.json"
import extractData from "../index"

let expected = {
  id: "diegoleme",
  site: "https://diegoleme.com.br",
  name: "Diego Leme",
  createTime: "2019-03-06T16:49:29.672875Z",
  updateTime: "2019-03-06T16:49:29.672875Z",
  positions: {
    VJtH2JbtVPrCP2REKglu: {
      id: "VJtH2JbtVPrCP2REKglu",
      title: "Back-end",
      description:
        "asjdh askjdb aksjj dhkajs hdkajs hdkjas hdkjj ashkd jhaksj dhhkasj hdhkkj ashkdjj haskdjj haskjd hkjhak sjdh kajsj hdkjajhkjhaksj hdkjas hdkjjash kdj asjdh jsh djas sjd askjdh aks",
      link: "https://dash.recruto.club/diegoleme/new",
      createTime: "2019-03-12T20:22:40.288444Z",
      updateTime: "2019-03-12T20:22:40.288444Z",
    },
    XGY3MqbBn9qMFttHZu06: {
      id: "XGY3MqbBn9qMFttHZu06",
      title: "Front-end",
      description: "Queremos um front end supimpa",
      link: "contato@diegoleme.com.br",
      createTime: "2019-03-06T18:58:58.894075Z",
      updateTime: "2019-03-06T18:58:58.894075Z",
    },
  },
}

test("Transform JSON", () => {
  expect(extractData(companyData, positionsData)).toMatchObject(expected)
})
