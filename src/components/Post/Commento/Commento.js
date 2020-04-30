import React, {useEffect} from 'react';
// Helper to add scripts to our page
const insertScript = (src, id, parentElement) => {
  const script = window.document.createElement('script');
  script.async = true;
  script.src   = src;
  script.id    = id;
  script.dataset.cssOverride = `${process.env.GATSBY_SITE_URL}/src/assets/commento.css`;
  parentElement.appendChild(script);
return script;
};
// Helper to remove scripts from our page
const removeScript = (id, parentElement) => {
  const script = window.document.getElementById(id);
  if (script) {
    parentElement.removeChild(script);
  }
};
// The actual component
const Commento = ({id}) => {
  useEffect(() => {
    // If there's no window there's nothing to do for us
    if (! window) {
      return;
    }
    const document = window.document;
    // In case our #commento container exists we can add our commento script
    if (document.getElementById('commento')) {
      insertScript(`${process.env.GATSBY_COMMENTO_SCRIPT_SOURCE}`, `commento-script`, document.body);
    }
// Cleanup; remove the script from the page
    return () => removeScript(`commento-script`, document.body);
  }, [id]);
return <div id={`commento`} />
};
export default Commento;