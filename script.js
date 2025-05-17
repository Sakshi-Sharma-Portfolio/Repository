
const articles = [
  { title: "Creating CSR & Key Attestation with YubiKey", file: "creating-csr-and-key-attestation-using-yubikey-token.pdf" },
  { title: "Fixing NET::ERR_CERT_COMMON_NAME_INVALID Error", file: "how-to-fix-neterr_cert_common_name_invalid-error.pdf" },
  { title: "How to Fix SSL/TLS Handshake Failed", file: "how-to-fix-ssl-tls-handshake-failed-error.pdf" },
  { title: "HTTPS vs SFTP: Technical Comparison", file: "https-vs-sftp.pdf" },
  { title: "SSL Certificates Installation Tutorials", file: "ssl-certificates-installation-tutorials.pdf" },
  { title: "What is Windows Code Signing Certificate?", file: "what-is-windows-code-signing-certificate.pdf" },
  { title: "What is a Cloud HSM?", file: "what-is-a-cloud-hardware-security-module.pdf" },
  { title: "What is Google Cloud HSM?", file: "what-is-google-cloud-hsm.pdf" }
];
const list = document.getElementById("articleList");
articles.forEach(article => {
  const li = document.createElement("li");
  li.innerHTML = `<a href="${article.file}" target="_blank">${article.title}</a>`;
  list.appendChild(li);
});
