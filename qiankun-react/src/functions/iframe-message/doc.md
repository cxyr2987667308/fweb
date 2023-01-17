## iframe 
```
<iframe ref={iframeRef}
  frameBorder="no" border="0"
  width='100%' height='100%'
  src={mobileUrl()}
/>
```

## iframe 父容器接收子容器的信息

```
useEffect(() => {
  window.addEventListener('message', receiveMessgeFromSun, false);

  return () => {
    window.removeEventListener('message', receiveMessgeFromSun);
  };
}, [visible]);

const receiveMessgeFromSun = (e) => {
  if (e.data?.type === 'layout-change') {
    const { current, layouts, curTabsWidget = {} } = e.data?.data || {};
    onLayoutChange(current, layouts, curTabsWidget);
  }

  if (e.data?.type === 'hide-widget') {
    const { hideItem } = e.data?.data || {};
    toHideWidget(hideItem);
  }
};
```

## iframe 子容器接收父容器信息
```
useEffect(() => {
  if (dashboardId === undefined) {
    window.addEventListener('message', receiveMessgeFromFather, false);
  }

  return () => {
    if (dashboardId === undefined) {
      window.removeEventListener('message', receiveMessgeFromFather);
    }
  };
}, []);

const receiveMessgeFromFather = e => {
  if (e.data?.type === 'widgets-change') {
    const { widgetItem, widgets, baseConfig } = e.data?.data || {};
    receiveQueryByDefault(widgets);
    widgets && setWidgets(widgets);
    widgetItem && setWidgetItem(widgetItem);
    baseConfig && globalStyleDetail(baseConfig);
  }
};
```

### 子容器向父容器发送信息
```
const sendMessageToFather = ({type, data}) => {
  window.parent.postMessage({
    type,
    data
  }, '*');
};
```

### 父容器向子容器发送信息
```
// 给Iframe发送消息
sendMessageToIframe = ({type, data }) => { console.log(type, data);
  this.iframeRef.current.contentWindow.postMessage({
    type,
    data
  }, '*');
}
```