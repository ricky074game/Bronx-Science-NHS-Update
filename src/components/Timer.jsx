import React, { Component } from "react";

export default function Timer() {
  return (
    <div class="container">
      <div class="container-segment">
        <div class="segment-title">Months</div>
        <div class="segment">
          <div class="flip-card" data-hours-tens>
            <div class="top">2</div>
            <div class="bottom">2</div>
          </div>
          <div class="flip-card" data-hours-ones>
            <div class="top">4</div>
            <div class="bottom">4</div>
          </div>
        </div>
      </div>

      <div class="container-segment">
        <div class="segment-title">Days</div>
        <div class="segment">
          <div class="flip-card" data-hours-tens>
            <div class="top">2</div>
            <div class="bottom">2</div>
          </div>
          <div class="flip-card" data-hours-ones>
            <div class="top">4</div>
            <div class="bottom">4</div>
          </div>
        </div>
      </div>

      <div class="container-segment">
        <div class="segment-title">Hours</div>
        <div class="segment">
          <div class="flip-card" data-hours-tens>
            <div class="top">2</div>
            <div class="bottom">2</div>
          </div>
          <div class="flip-card" data-hours-ones>
            <div class="top">4</div>
            <div class="bottom">4</div>
          </div>
        </div>
      </div>
      <div class="container-segment">
        <div class="segment-title">Minutes</div>
        <div class="segment">
          <div class="flip-card" data-minutes-tens>
            <div class="top">0</div>
            <div class="bottom">0</div>
          </div>
          <div class="flip-card" data-minutes-ones>
            <div class="top">0</div>
            <div class="bottom">0</div>
          </div>
        </div>
      </div>
      <div class="container-segment">
        <div class="segment-title">Seconds</div>
        <div class="segment">
          <div class="flip-card" data-seconds-tens>
            <div class="top">0</div>
            <div class="bottom">0</div>
          </div>
          <div class="flip-card" data-seconds-ones>
            <div class="top">0</div>
            <div class="bottom">0</div>
          </div>
        </div>
      </div>
    </div>
  );
}
