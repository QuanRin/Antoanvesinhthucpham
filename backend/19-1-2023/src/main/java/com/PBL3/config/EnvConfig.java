package com.PBL3.config;

import io.github.cdimascio.dotenv.Dotenv;

public class EnvConfig {
    public static Dotenv load() {
        return Dotenv.configure().directory("E:\\PBL3Web\\backend\\19-1-2023\\assets").filename("env").load();
    }
}
