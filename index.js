const areas = require("./json_data/areas.json");
const provinces = require("./json_data/provinces.json");
const districts = require("./json_data/districts.json");
const wards = require("./json_data/wards.json");
const tree = require("./json_data/tree.json");
const treeWithArea = require("./json_data/treeWithArea.json");

function stringToSlug(str) {
  var from =
    "àáãảạăằắẳẵặâầấẩẫậèéẻẽẹêềếểễệđùúủũụưừứửữựòóỏõọôồốổỗộơờớởỡợìíỉĩịäëïîöüûñçýỳỹỵỷ",
    to =
    "aaaaaaaaaaaaaaaaaeeeeeeeeeeeduuuuuuuuuuuoooooooooooooooooiiiiiaeiiouuncyyyyy";
  for (var i = 0, l = from.length; i < l; i++) {
    str = str ? str.replace(RegExp(from[i], "gi"), to[i]) : "";
  }
  str = str
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\-]/g, "-")
    .replace(/-+/g, "-");

  return str;
}

module.exports = {
  getAreas: () => areas,
  getProvinces: () => provinces,
  getDistricts: () => districts,
  getWards: () => wards,
  getAreasWithDetail: () => treeWithArea,
  getProvincesWithDetail: () => tree,
  getProvindByAreaCode: (areaCode) => provinces.filter((x) => x.areaCode == areaCode),
  getDistrictsByProvinceCode: (provinceCode) => districts.filter((x) => x.province_code == provinceCode),
  getWardsByDistrictCode: (districtCode) => wards.filter((x) => x.district_code == districtCode),
  getWardsByProvinceCode: (provinceCode) => wards.filter((x) => x.province_code == provinceCode),
  getWardsByCode: (wardCode) => wards.find((x) => x.code == wardCode),
  getCityByCode: (cityCode) => provinces.find((x) => x.code == cityCode),
  getDistrictByCode: (districtCode) => districts.find((x) => x.code == districtCode),
  //update feature getCodeByName
  getCodeByDistrict: (districtName, provinceName) => districts.find((x) => stringToSlug(x.name).includes(stringToSlug(districtName)) && stringToSlug(x.province_name).includes(stringToSlug(provinceName))),
  getCodeByWard: (ward, district, city) => wards.find((x) => stringToSlug(x.name).includes(stringToSlug(ward)) && stringToSlug(x.district_name).includes(stringToSlug(district)) && stringToSlug(x.province_name).includes(stringToSlug(city))),
  getCodeProvince: (provinceName) => provinces.find((x) => stringToSlug(x.name).includes(stringToSlug(provinceName))),
};