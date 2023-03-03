import { getDataSet } from "pf2e-database";


export default defineEventHandler(async (event) => {
    const query = getQuery(event)
    const dataSetName = query.dataSetName
    if (dataSetName) return await getDataSet(dataSetName);
    return null
})