import * as next_dist_server_config_shared0 from "next/dist/server/config-shared";
import * as next_dist_compiled_webpack_webpack0 from "next/dist/compiled/webpack/webpack";
import * as next_dist_build_webpack_plugins_subresource_integrity_plugin0 from "next/dist/build/webpack/plugins/subresource-integrity-plugin";
import * as next_dist_shared_lib_utils0 from "next/dist/shared/lib/utils";
import * as next_dist_server_lib_experimental_ppr0 from "next/dist/server/lib/experimental/ppr";
import * as next0 from "next";
import { NextConfig } from "next";
import * as next_dist_cli_next_test0 from "next/dist/cli/next-test";
import * as next_dist_lib_load_custom_routes0 from "next/dist/lib/load-custom-routes";
import * as next_dist_shared_lib_image_config0 from "next/dist/shared/lib/image-config";

//#region src/index.d.ts
declare function withAtomicVariants(nextConfig: NextConfig): {
  webpack: (webpackConfig: any, options: next_dist_server_config_shared0.WebpackConfigContext) => any;
  experimental: {
    swcPlugins: [string, Record<string, unknown>][];
    adapterPath?: string;
    useSkewCookie?: boolean;
    cacheHandlers?: NextConfig["cacheHandlers"];
    multiZoneDraftMode?: boolean;
    appNavFailHandling?: boolean;
    prerenderEarlyExit?: boolean;
    linkNoTouchStart?: boolean;
    caseSensitiveRoutes?: boolean;
    clientParamParsingOrigins?: string[];
    dynamicOnHover?: boolean;
    preloadEntriesOnStart?: boolean;
    clientRouterFilter?: boolean;
    clientRouterFilterRedirects?: boolean;
    staleTimes?: {
      dynamic?: number;
      static?: number;
    };
    cacheLife?: NextConfig["cacheLife"];
    clientRouterFilterAllowedRate?: number;
    externalMiddlewareRewritesResolve?: boolean;
    externalProxyRewritesResolve?: boolean;
    extensionAlias?: Record<string, any>;
    allowedRevalidateHeaderKeys?: string[];
    fetchCacheKeyPrefix?: string;
    imgOptConcurrency?: number | null;
    imgOptTimeoutInSeconds?: number;
    imgOptMaxInputPixels?: number;
    imgOptSequentialRead?: boolean | null;
    imgOptSkipMetadata?: boolean | null;
    optimisticClientCache?: boolean;
    expireTime?: number;
    middlewarePrefetch?: "strict" | "flexible";
    proxyPrefetch?: "strict" | "flexible";
    manualClientBasePath?: boolean;
    cssChunking?: boolean | "strict";
    disablePostcssPresetEnv?: boolean;
    cpus?: number;
    memoryBasedWorkersCount?: boolean;
    proxyTimeout?: number;
    isrFlushToDisk?: boolean;
    workerThreads?: boolean;
    optimizeCss?: boolean | Record<string, unknown>;
    nextScriptWorkers?: boolean;
    scrollRestoration?: boolean;
    externalDir?: boolean;
    disableOptimizedLoading?: boolean;
    gzipSize?: boolean;
    craCompat?: boolean;
    esmExternals?: boolean | "loose";
    fullySpecified?: boolean;
    urlImports?: NonNullable<next_dist_compiled_webpack_webpack0.webpack.Configuration["experiments"]>["buildHttp"];
    swcTraceProfiling?: boolean;
    forceSwcTransforms?: boolean;
    largePageDataBytes?: number;
    fallbackNodePolyfills?: false;
    sri?: {
      algorithm?: next_dist_build_webpack_plugins_subresource_integrity_plugin0.SubresourceIntegrityAlgorithm;
    };
    webVitalsAttribution?: Array<typeof next_dist_shared_lib_utils0.WEB_VITALS[number]>;
    optimizePackageImports?: string[];
    optimizeServerReact?: boolean;
    turbopackMemoryLimit?: number;
    turbopackMinify?: boolean;
    turbopackImportTypeBytes?: boolean;
    turbopackScopeHoisting?: boolean;
    turbopackFileSystemCacheForDev?: boolean;
    turbopackFileSystemCacheForBuild?: boolean;
    turbopackSourceMaps?: boolean;
    turbopackTreeShaking?: boolean;
    turbopackRemoveUnusedExports?: boolean;
    turbopackUseSystemTlsCerts?: boolean;
    turbopackUseBuiltinBabel?: boolean;
    turbopackUseBuiltinSass?: boolean;
    turbopackModuleIds?: "named" | "deterministic";
    mdxRs?: boolean | {
      development?: boolean;
      jsx?: boolean;
      jsxRuntime?: string;
      jsxImportSource?: string;
      providerImportSource?: string;
      mdxType?: "gfm" | "commonmark";
    };
    typedRoutes?: boolean;
    typedEnv?: boolean;
    parallelServerCompiles?: boolean;
    parallelServerBuildTraces?: boolean;
    webpackBuildWorker?: boolean;
    webpackMemoryOptimizations?: boolean;
    clientTraceMetadata?: string[];
    ppr?: next_dist_server_lib_experimental_ppr0.ExperimentalPPRConfig;
    taint?: boolean;
    removeUncaughtErrorAndRejectionListeners?: boolean;
    validateRSCRequestHeaders?: boolean;
    serverActions?: {
      bodySizeLimit?: next0.SizeLimit;
      allowedOrigins?: string[];
    };
    serverMinification?: boolean;
    serverSourceMaps?: boolean;
    useWasmBinary?: boolean;
    useLightningcss?: boolean;
    viewTransition?: boolean;
    testProxy?: boolean;
    defaultTestRunner?: next_dist_cli_next_test0.SupportedTestRunners;
    allowDevelopmentBuild?: true;
    bundlePagesExternals?: boolean;
    serverComponentsExternalPackages?: string[];
    reactDebugChannel?: boolean;
    cacheComponents?: boolean;
    staticGenerationRetryCount?: number;
    staticGenerationMaxConcurrency?: number;
    staticGenerationMinPagesPerWorker?: number;
    serverComponentsHmrCache?: boolean;
    inlineCss?: boolean;
    authInterrupts?: boolean;
    useCache?: boolean;
    slowModuleDetection?: {
      buildTimeThresholdMs: number;
    };
    globalNotFound?: boolean;
    browserDebugInfoInTerminal?: boolean | {
      depthLimit?: number;
      edgeLimit?: number;
      showSourceLocation?: boolean;
    };
    rootParams?: boolean;
    isolatedDevBuild?: boolean;
    middlewareClientMaxBodySize?: next0.SizeLimit;
    proxyClientMaxBodySize?: next0.SizeLimit;
    mcpServer?: boolean;
    lockDistDir?: boolean;
    hideLogsAfterAbort?: boolean;
  };
  allowedDevOrigins?: string[];
  exportPathMap?: (defaultMap: next_dist_server_config_shared0.ExportPathMap, ctx: {
    dev: boolean;
    dir: string;
    outDir: string | null;
    distDir: string;
    buildId: string;
  }) => Promise<next_dist_server_config_shared0.ExportPathMap> | next_dist_server_config_shared0.ExportPathMap;
  i18n?: next_dist_server_config_shared0.I18NConfig | null;
  typescript?: next_dist_server_config_shared0.TypeScriptConfig;
  typedRoutes?: boolean;
  headers?: () => Promise<next_dist_lib_load_custom_routes0.Header[]> | next_dist_lib_load_custom_routes0.Header[];
  rewrites?: () => Promise<next_dist_lib_load_custom_routes0.Rewrite[] | {
    beforeFiles?: next_dist_lib_load_custom_routes0.Rewrite[];
    afterFiles?: next_dist_lib_load_custom_routes0.Rewrite[];
    fallback?: next_dist_lib_load_custom_routes0.Rewrite[];
  }> | next_dist_lib_load_custom_routes0.Rewrite[] | {
    beforeFiles?: next_dist_lib_load_custom_routes0.Rewrite[];
    afterFiles?: next_dist_lib_load_custom_routes0.Rewrite[];
    fallback?: next_dist_lib_load_custom_routes0.Rewrite[];
  };
  redirects?: () => Promise<next_dist_lib_load_custom_routes0.Redirect[]> | next_dist_lib_load_custom_routes0.Redirect[];
  excludeDefaultMomentLocales?: boolean;
  trailingSlash?: boolean;
  env?: Record<string, string | undefined>;
  distDir?: string;
  cleanDistDir?: boolean;
  assetPrefix?: string;
  cacheHandler?: string | undefined;
  cacheHandlers?: {
    default?: string;
    remote?: string;
    static?: string;
    [handlerName: string]: string | undefined;
  };
  cacheMaxMemorySize?: number;
  useFileSystemPublicRoutes?: boolean;
  generateBuildId?: () => string | null | Promise<string | null>;
  generateEtags?: boolean;
  pageExtensions?: string[];
  compress?: boolean;
  poweredByHeader?: boolean;
  images?: next_dist_shared_lib_image_config0.ImageConfig;
  devIndicators?: false | {
    position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  };
  onDemandEntries?: {
    maxInactiveAge?: number;
    pagesBufferLength?: number;
  };
  deploymentId?: string;
  basePath?: string;
  sassOptions?: {
    implementation?: string;
    [key: string]: any;
  };
  productionBrowserSourceMaps?: boolean;
  reactCompiler?: boolean | next_dist_server_config_shared0.ReactCompilerOptions;
  reactProductionProfiling?: boolean;
  reactStrictMode?: boolean | null;
  reactMaxHeadersLength?: number;
  httpAgentOptions?: {
    keepAlive?: boolean;
  };
  staticPageGenerationTimeout?: number;
  crossOrigin?: "anonymous" | "use-credentials";
  compiler?: {
    reactRemoveProperties?: boolean | {
      properties?: string[];
    };
    relay?: {
      src: string;
      artifactDirectory?: string;
      language?: "typescript" | "javascript" | "flow";
      eagerEsModules?: boolean;
    };
    removeConsole?: boolean | {
      exclude?: string[];
    };
    styledComponents?: boolean | next_dist_server_config_shared0.StyledComponentsConfig;
    emotion?: boolean | next_dist_server_config_shared0.EmotionConfig;
    styledJsx?: boolean | {
      useLightningcss?: boolean;
    };
    define?: Record<string, string>;
    defineServer?: Record<string, string>;
    runAfterProductionCompile?: (metadata: {
      projectDir: string;
      distDir: string;
    }) => Promise<void>;
  };
  output?: "standalone" | "export";
  transpilePackages?: string[];
  turbopack?: next_dist_server_config_shared0.TurbopackOptions;
  skipMiddlewareUrlNormalize?: boolean;
  skipProxyUrlNormalize?: boolean;
  skipTrailingSlashRedirect?: boolean;
  modularizeImports?: Record<string, {
    transform: string | Record<string, string>;
    preventFullImport?: boolean;
    skipDefaultConversion?: boolean;
  }>;
  logging?: next_dist_server_config_shared0.LoggingConfig | false;
  enablePrerenderSourceMaps?: boolean;
  cacheComponents?: boolean;
  cacheLife?: {
    [profile: string]: {
      stale?: number;
      revalidate?: number;
      expire?: number;
    };
  };
  expireTime?: number;
  bundlePagesRouterDependencies?: boolean;
  serverExternalPackages?: string[];
  outputFileTracingRoot?: string;
  outputFileTracingExcludes?: Record<string, string[]>;
  outputFileTracingIncludes?: Record<string, string[]>;
  watchOptions?: {
    pollIntervalMs?: number;
  };
  htmlLimitedBots?: RegExp;
};
//#endregion
export { withAtomicVariants };