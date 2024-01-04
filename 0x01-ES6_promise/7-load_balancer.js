// accepts two args and returns value resolved by promise first
export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload]).then((res) => res);
}
