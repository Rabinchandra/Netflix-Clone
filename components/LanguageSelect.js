function LanguageSelect({ isDark }) {
  return (
    <select
      className={`language-select ${
        isDark ? 'language-select-dark' : 'language-select-white'
      }`}>
      <option value='english'>English</option>
      <option value='hindi'>Hindi</option>
    </select>
  );
}

export default LanguageSelect;
