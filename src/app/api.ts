import axios from 'axios'
import { ICode } from './types';
import { splitCode } from './lib';

export async function getCode(code: string): Promise<ICode> {
    const all_res = await getAllCodes()

    return all_res.find(x => x.code === code)

    // const res = await axios.get(`http://localhost:1337/codes/${id}`)
}

export async function getAllCodes(): Promise<ICode[]> {
    const res = await axios.get('http://localhost:5000/items')
    // const res = await axios.get('http://localhost:1337/codes')

    return res.data['data']

    return [
        { alias: "P_C_01_a", title: "ПЛИТКА ФИБРОБЕТОННАЯ МОДУЛЬНАЯ", code: "P_T01_M01_02_P01_C02_B01" },
        { alias: "P_C_01_b", title: "ПЛИТКА ФИБРОБЕТОННАЯ МОДУЛЬНАЯ", code: "P_T01_M01_02_P01_C02_B02" },
        { alias: "P_C_02_a", title: "ПЛИТКА ФИБРОБЕТОННАЯ МОДУЛЬНАЯ", code: "P_T01_M01_05_P01_C02_B01" },
        { alias: "P_C_02_b", title: "ПЛИТКА ФИБРОБЕТОННАЯ МОДУЛЬНАЯ", code: "P_T01_M01_05_P01_C02_B02" },
        { alias: "P_C_03_a", title: "ПЛИТКА ФИБРОБЕТОННАЯ МОДУЛЬНАЯ", code: "P_T01_M01_04_P01_C01_B01" },
        { alias: "P_C_03_b", title: "ПЛИТКА ФИБРОБЕТОННАЯ МОДУЛЬНАЯ", code: "P_T01_M01_04_P01_C01_B02" },
        { alias: "P_C_04_a", title: "ПЛИТКА ФИБРОБЕТОННАЯ МОДУЛЬНАЯ", code: "P_T01_M01_05_P01_C02_B01" },
        { alias: "P_C_04_b", title: "ПЛИТКА ФИБРОБЕТОННАЯ МОДУЛЬНАЯ", code: "P_T01_M01_05_P01_C02_B02" },
        { alias: "P_C_05_a", title: "ПЛИТКА ФИБРОБЕТОННАЯ МОДУЛЬНАЯ", code: "P_T01_M01_P02_C02_B01" },
        { alias: "P_C_05_b", title: "ПЛИТКА ФИБРОБЕТОННАЯ МОДУЛЬНАЯ", code: "P_T01_M01_P02_C02_B02" },
        { alias: "P_C_06_a", title: "ПЛИТКА ФИБРОБЕТОННАЯ МОДУЛЬНАЯ", code: "P_T01_M01_P02_C01_02_B01" },
        { alias: "P_C_06_b", title: "ПЛИТКА ФИБРОБЕТОННАЯ МОДУЛЬНАЯ", code: "P_T01_M01_P02_C01_02_B02" },
        { alias: "P_C_09_a", title: "ПЛИТКА ФИБРОБЕТОННАЯ МОДУЛЬНАЯ", code: "P_T01_M01_P02_C01_B01" },
        { alias: "P_C_09_b", title: "ПЛИТКА ФИБРОБЕТОННАЯ МОДУЛЬНАЯ", code: "P_T01_M01_P02_C01_B02" },
        { alias: "P_C_10_a", title: "ПЛИТКА ФИБРОБЕТОННАЯ МОДУЛЬНАЯ", code: "P_T01_M01_02_05_P03_C02_B01" },
        { alias: "P_C_10_b", title: "ПЛИТКА ФИБРОБЕТОННАЯ МОДУЛЬНАЯ", code: "P_T01_M01_02_05_P03_C02_B02" },
        { alias: "P_C_11_a", title: "ПЛИТКА ФИБРОБЕТОННАЯ МОДУЛЬНАЯ", code: "P_T01_M01_02_05_P03_C01_B01" },
        { alias: "P_C_11_b", title: "ПЛИТКА ФИБРОБЕТОННАЯ МОДУЛЬНАЯ", code: "P_T01_M01_02_05_P03_C01_B02" },
        { alias: "P_C_12_a", title: "ПЛИТКА ФИБРОБЕТОННАЯ МОДУЛЬНАЯ", code: "P_T01_M01_02_P04_C02_B01" },
        { alias: "P_C_12_b", title: "ПЛИТКА ФИБРОБЕТОННАЯ МОДУЛЬНАЯ", code: "P_T01_M01_02_P04_C02_B02" },
        { alias: "P_C_13_a", title: "ПЛИТКА ФИБРОБЕТОННАЯ МОДУЛЬНАЯ", code: "P_T01_M01_02_P04_C01_B01" },
        { alias: "P_C_13_b", title: "ПЛИТКА ФИБРОБЕТОННАЯ МОДУЛЬНАЯ", code: "P_T01_M01_02_P04_C01_B02" },
        { alias: "P_C_14_a", title: "ПЛИТКА ФИБРОБЕТОННАЯ МОДУЛЬНАЯ", code: "P_T01_M01_02_P05_C02_B01" },
        { alias: "P_C_14_b", title: "ПЛИТКА ФИБРОБЕТОННАЯ МОДУЛЬНАЯ", code: "P_T01_M01_02_P05_C02_B02" },
        { alias: "P_C_15_a", title: "ПЛИТКА ФИБРОБЕТОННАЯ МОДУЛЬНАЯ", code: "P_T01_M01_02_P05_C02_B01" },
        { alias: "P_C_15_b", title: "ПЛИТКА ФИБРОБЕТОННАЯ МОДУЛЬНАЯ", code: "P_T01_M01_02_P05_C02_B02" },
        { alias: "P_C_16_a", title: "ПЛИТКА ФИБРОБЕТОННАЯ МОДУЛЬНАЯ", code: "P_T01_M01_05_08_P06_C02_B01" },
        { alias: "P_C_16_b", title: "ПЛИТКА ФИБРОБЕТОННАЯ МОДУЛЬНАЯ", code: "P_T01_M01_05_08_P06_C02_B02" },
        { alias: "P_C_20_a", title: "ПЛИТКА ФИБРОБЕТОННАЯ МОДУЛЬНАЯ", code: "P_T01_M01_05_08_P06_C01_B01" },
        { alias: "P_C_20_b", title: "ПЛИТКА ФИБРОБЕТОННАЯ МОДУЛЬНАЯ", code: "P_T01_M01_05_08_P06_C01_B02" },
        { alias: "P_C_21_a", title: "ПЛИТКА ФИБРОБЕТОННАЯ МОДУЛЬНАЯ", code: "P_T01_M01_P07_C02_B01" },
        { alias: "P_C_21_b", title: "ПЛИТКА ФИБРОБЕТОННАЯ МОДУЛЬНАЯ", code: "P_T01_M01_P07_C02_B02" },
        { alias: "P_C_22_a", title: "ПЛИТКА ФИБРОБЕТОННАЯ МОДУЛЬНАЯ", code: "P_T01_M01_P08_C02_B01" },
        { alias: "P_C_22_b", title: "ПЛИТКА ФИБРОБЕТОННАЯ МОДУЛЬНАЯ", code: "P_T01_M01_P08_C02_B02" },
        { alias: "P_C_23_a", title: "ПЛИТКА ФИБРОБЕТОННАЯ МОДУЛЬНАЯ", code: "P_T01_M01_05_P09_C02_B01" },
        { alias: "P_C_23_b", title: "ПЛИТКА ФИБРОБЕТОННАЯ МОДУЛЬНАЯ", code: "P_T01_M01_05_P09_C02_B02" },
        { alias: "P_C_24_a", title: "ПЛИТКА ФИБРОБЕТОННАЯ МОДУЛЬНАЯ", code: "P_T01_M01_P10_C02_B01" },
        { alias: "P_C_24_b", title: "ПЛИТКА ФИБРОБЕТОННАЯ МОДУЛЬНАЯ", code: "P_T01_M01_P10_C02_B02" },
        { alias: "P_C_25_a", title: "ПЛИТКА ФИБРОБЕТОННАЯ МОДУЛЬНАЯ", code: "P_T01_M01_05_P11_C02_B01" },
        { alias: "P_C_25_b", title: "ПЛИТКА ФИБРОБЕТОННАЯ МОДУЛЬНАЯ", code: "P_T01_M01_05_P11_C02_B02" },
        { alias: "P_C_26_a", title: "ПЛИТКА ФИБРОБЕТОННАЯ МОДУЛЬНАЯ", code: "P_T01_M01_08_P12_C02_B01" },
        { alias: "P_C_26_b", title: "ПЛИТКА ФИБРОБЕТОННАЯ МОДУЛЬНАЯ", code: "P_T01_M01_08_P12_C02_B02" },
        { alias: "P_C_27_a", title: "ПЛИТКА ФИБРОБЕТОННАЯ МОДУЛЬНАЯ", code: "P_T01_M01_05_P13_C01_02_B01" },
        { alias: "P_C_27_b", title: "ПЛИТКА ФИБРОБЕТОННАЯ МОДУЛЬНАЯ", code: "P_T01_M01_05_P13_C01_02_B02" },
        { alias: "P_C_28_a", title: "ПЛИТКА ФИБРОБЕТОННАЯ МОДУЛЬНАЯ", code: "P_T01_M01_P14_C02_B01" },
        { alias: "P_C_28_b", title: "ПЛИТКА ФИБРОБЕТОННАЯ МОДУЛЬНАЯ", code: "P_T01_M01_P14_C02_B02" },
        { alias: "P_C_29_a", title: "ПЛИТКА ФИБРОБЕТОННАЯ МОДУЛЬНАЯ", code: "P_T01_M01_05_P15_C02_B01" },
        { alias: "P_C_29_b", title: "ПЛИТКА ФИБРОБЕТОННАЯ МОДУЛЬНАЯ", code: "P_T01_M01_05_P15_C02_B02" },
        { alias: "P_C_30_a", title: "ПЛИТКА ФИБРОБЕТОННАЯ МОДУЛЬНАЯ", code: "P_T01_M01_05_P16_C01_02_B01" },
        { alias: "P_C_30_b", title: "ПЛИТКА ФИБРОБЕТОННАЯ МОДУЛЬНАЯ", code: "P_T01_M01_05_P16_C01_02_B02" },
        { alias: "P_C_31_a", title: "ПЛИТКА ФИБРОБЕТОННАЯ МОДУЛЬНАЯ", code: "P_T01_M01_P17_C01_02_B01" },
        { alias: "P_C_31_b", title: "ПЛИТКА ФИБРОБЕТОННАЯ МОДУЛЬНАЯ", code: "P_T01_M01_P17_C01_02_B02" },
        { alias: "P_C_32_a", title: "ПЛИТКА ФИБРОБЕТОННАЯ МОДУЛЬНАЯ", code: "P_T01_M01_P18_C01_02_B01" },
        { alias: "P_C_32_b", title: "ПЛИТКА ФИБРОБЕТОННАЯ МОДУЛЬНАЯ", code: "P_T01_M01_P18_C01_02_B02" },

        { "alias": "P_D_01", "title": "ТЕРРАСНАЯ ДОСКА", "code": "P_T01_M06_P19_B02" },
        { "alias": "P_G_01_a", "title": "ГЕОРЕШЕТКА С КВАДРАТНЫМ МОДУЛЕМ", "code": "P_T01_M01_08_P20_B01" },
        { "alias": "P_G_01_b", "title": "ГЕОРЕШЕТКА С КВАДРАТНЫМ МОДУЛЕМ", "code": "P_T01_M01_08_P20_B02" },
        { "alias": "P_G_02_a", "title": "ГЕОРЕШЕТКА С КРУГЛЫМ МОДУЛЕМ", "code": "P_T01_M01_05_P21_B01" },
        { "alias": "P_G_02_b", "title": "ГЕОРЕШЕТКА С КРУГЛЫМ МОДУЛЕМ", "code": "P_T01_M01_05_P21_B02" },
        { "alias": "P_K_01_a", "title": "БРУСЧАТКА КЛИНКЕРНАЯ", "code": "P_T01_M09_P22_C05_B01" },
        { "alias": "P_K_01_b", "title": "БРУСЧАТКА КЛИНКЕРНАЯ", "code": "P_T01_M09_P22_C05_B02" },
        { "alias": "P_K_02_a", "title": "БРУСЧАТКА КЛИНКЕРНАЯ", "code": "P_T01_M09_P22_C06_B01" },
        { "alias": "P_K_02_b", "title": "БРУСЧАТКА КЛИНКЕРНАЯ", "code": "P_T01_M09_P22_C06_B02" },
        { "alias": "P_K_03_a", "title": "БРУСЧАТКА КЛИНКЕРНАЯ", "code": "P_T01_M09_P22_C07_B01" },
        { "alias": "P_K_03_b", "title": "БРУСЧАТКА КЛИНКЕРНАЯ", "code": "P_T01_M09_P22_C07_B02" },
        { "alias": "P_K_04_a", "title": "БРУСЧАТКА КЛИНКЕРНАЯ", "code": "P_T01_M09_P23_C05_B01" },
        { "alias": "P_K_04_b", "title": "БРУСЧАТКА КЛИНКЕРНАЯ", "code": "P_T01_M09_P23_C05_B02" },
        { "alias": "P_K_05_a", "title": "БРУСЧАТКА КЛИНКЕРНАЯ", "code": "P_T01_M09_P23_C06_B01" },
        { "alias": "P_K_05_b", "title": "БРУСЧАТКА КЛИНКЕРНАЯ", "code": "P_T01_M09_P23_C06_B02" },
        { "alias": "P_K_06_a", "title": "БРУСЧАТКА КЛИНКЕРНАЯ", "code": "P_T01_M09_P23_C07_B01" },
        { "alias": "P_K_06_b", "title": "БРУСЧАТКА КЛИНКЕРНАЯ", "code": "P_T01_M09_P23_C07_B02" },
        { "alias": "P_M_01_a", "title": "АСФАЛЬТОБЕТОН", "code": "P_T02_M10_C05_B01" },
        { "alias": "P_M_01_b", "title": "АСФАЛЬТОБЕТОН", "code": "P_T02_M10_C05_B02" },
        { "alias": "P_M_03_a", "title": "МОНОЛИТНЫЙ БЕТОН", "code": "P_T02_M01_C06_B01" },
        { "alias": "P_M_04_a", "title": "МОНОЛИТНЫЙ БЕТОН", "code": "P_T02_M02_C06_B01" },
        { "alias": "P_M_04_b", "title": "МОНОЛИТНЫЙ БЕТОН", "code": "P_T02_M02_C06_B02" },
        { "alias": "P_M_05_a", "title": "МОНОЛИТНЫЙ БЕТОН", "code": "P_T02_M01_C08_B01" },
        { "alias": "P_R_01_a", "title": "ГАЛТОВАННЫЙ МРАМОР", "code": "P_T03_M11_C03_B01" },
        { "alias": "P_R_01_b", "title": "ГАЛТОВАННЫЙ МРАМОР", "code": "P_T03_M11_C03_B02" },
        { "alias": "P_R_02_a", "title": "СЛАНЕЦ", "code": "P_T03_M12_C01_B01" },
        { "alias": "P_R_02_b", "title": "СЛАНЕЦ", "code": "P_T03_M12_C01_B02" },
        { "alias": "P_R_03_a", "title": "МУЛЬЧИРУЮЩАЯ ЩЕПА", "code": "P_T03_M12_C10_B01" },
        { "alias": "P_R_03_b", "title": "МУЛЬЧИРУЮЩАЯ ЩЕПА", "code": "P_T03_M12_C10_B02" },
        { "alias": "P_R_04_a", "title": "МУЛЬЧИРУЮЩАЯ ЩЕПА", "code": "P_T03_M12_C09_B01" },
        { "alias": "P_R_04_b", "title": "МУЛЬЧИРУЮЩАЯ ЩЕПА", "code": "P_T03_M12_C09_B02" },
        { "alias": "P_R_05_a", "title": "ПЕСОК", "code": "P_T03_M14_B01" },
        { "alias": "P_R_05_b", "title": "ПЕСОК", "code": "P_T03_M14_B02" },
        { "alias": "P_R_06_a", "title": "ГРАНИТНЫЙ ОТСЕВ", "code": "P_T03_M05_C10_B01" },
        { "alias": "P_R_06_b", "title": "ГРАНИТНЫЙ ОТСЕВ", "code": "P_T03_M05_C10_B02" },
        { "alias": "P_R_07_a", "title": "ГРАНИТНЫЙ ОТСЕВ", "code": "P_T03_M05_C02_B01" },
        { "alias": "P_R_07_b", "title": "ГРАНИТНЫЙ ОТСЕВ", "code": "P_T03_M05_C02_B02" },
        { "alias": "P_S_01_a", "title": "БРУСЧАТКА КАМЕННАЯ", "code": "P_T01_M03_05_C02_03_B01" },
        { "alias": "P_S_01_b", "title": "БРУСЧАТКА КАМЕННАЯ", "code": "P_T01_M03_05_C02_03_B02" },
        { "alias": "P_S_02_a", "title": "БРУСЧАТКА КАМЕННАЯ", "code": "P_T01_M03_12_C02_01_B01" },
        { "alias": "P_S_02_b", "title": "БРУСЧАТКА КАМЕННАЯ", "code": "P_T01_M03_12_C02_01_B02" },
        { "alias": "P_S_03_a", "title": "БРУСЧАТКА КАМЕННАЯ", "code": "P_T01_M03_05_C05_03_B01" },
        { "alias": "P_S_03_b", "title": "БРУСЧАТКА КАМЕННАЯ", "code": "P_T01_M03_05_C05_03_B02" },
        { "alias": "P_S_04_a", "title": "БРУСЧАТКА КАМЕННАЯ", "code": "P_T01_M03_12_C05_01_B01" },
        { "alias": "P_S_04_b", "title": "БРУСЧАТКА КАМЕННАЯ", "code": "P_T01_M03_12_C05_01_B02" },
        { "alias": "P_W_01_a", "title": "ДЕРЕВЯННАЯ БРУСЧАТКА", "code": "P_T01_M07_05_C10_03_B01" },
        { "alias": "P_W_01_b", "title": "ДЕРЕВЯННАЯ БРУСЧАТКА", "code": "P_T01_M07_05_C10_03_B02" },
        { "alias": "P_W_02_a", "title": "ДЕРЕВЯННАЯ БРУСЧАТКА", "code": "P_T01_M07_12_C10_01_B01" },
        { "alias": "P_W_02_b", "title": "ДЕРЕВЯННАЯ БРУСЧАТКА", "code": "P_T01_M07_12_C10_01_B02" },
        { "alias": "P_W_03_a", "title": "ДЕРЕВЯННАЯ БРУСЧАТКА", "code": "P_T01_M07_05_C09_03_B01" },
        { "alias": "P_W_03_b", "title": "ДЕРЕВЯННАЯ БРУСЧАТКА", "code": "P_T01_M07_05_C09_03_B02" },
        { "alias": "P_W_04_a", "title": "ДЕРЕВЯННАЯ БРУСЧАТКА", "code": "P_T01_M07_12_C09_01_B01" },
        { "alias": "P_W_04_b", "title": "ДЕРЕВЯННАЯ БРУСЧАТКА", "code": "P_T01_M07_12_C09_01_B02" },
    ]
}

export async function getAllTags(): Promise<string[]> {
    const res = await axios.get('http://localhost:5000/search/tags')

    return res.data['data']

    const items = await getAllCodes()
    const codes = items
        .map(x => x.code)
        .map(splitCode)
        .flat()

    return Array
        .from(new Set(codes))
        .sort()
}
