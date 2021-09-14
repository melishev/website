import PluginId from '../pluginId'

import Embed from '@editorjs/embed'
import List from '@editorjs/list'
import Code from '@editorjs/code'
import Link from '@editorjs/link'
import Header from '@editorjs/header'
import Marker from '@editorjs/marker'
import CheckList from '@editorjs/checklist'

const customTools = {
  embed: Embed,
  list: {
    class: List,
    inlineToolbar: true,
  },
  code: Code,
  link: {
    class: Link,
    config: {
      endpoint: `/${PluginId}/link`,
    },
  },
  header: {
    class: Header,
    inlineToolbar: true,
  },
  marker: {
    class: Marker,
    inlineToolbar: true,
  },
  checklist: {
    class: CheckList,
    inlineToolbar: true,
  },
}

export default customTools