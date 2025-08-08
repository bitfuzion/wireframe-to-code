import React from 'react'
import { Sandpack, SandpackCodeEditor, SandpackLayout, SandpackProvider } from "@codesandbox/sandpack-react";
import Constants from '@/data/Constants';
import { aquaBlue } from "@codesandbox/sandpack-themes";
function CodeEditor({ codeResp, isReady }: any) {
    return (
        <div>
            {isReady ? <Sandpack template="react"
                theme={aquaBlue}
                options={{
                    externalResources: ["https://cdn.tailwindcss.com"],
                    showNavigator: true,
                    showTabs: true,
                    editorHeight: 600
                }}
                customSetup={{
                    dependencies: {
                        ...Constants.DEPENDANCY
                    }
                }}
                files={{
                    "/App.js": `${codeResp}`,

                }} />
                :
                <SandpackProvider template="react"
                    theme={aquaBlue}
                    files={{
                        "/app.js": {
                            code: `${codeResp}`,
                            active: true
                        }
                    }}
                    customSetup={{
                        dependencies: {
                            ...Constants.DEPENDANCY
                        }
                    }}
                    options={{
                        externalResources: ["https://cdn.tailwindcss.com"],
                    }}
                >
                    <SandpackLayout>

                        <SandpackCodeEditor showTabs={true} style={{ height: '70vh' }} />
                    </SandpackLayout>
                </SandpackProvider>
            }
        </div>
    )
}

export default CodeEditor